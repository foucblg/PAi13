use std::collections::HashMap;
use color_print::cprintln;
use std::fs::{File, OpenOptions};
use std::io::Read;
use std::io::{BufWriter, Write};

use serde::{Deserialize, Serialize};

use inquire::{
    error::InquireResult,
    prompt_confirmation, required, InquireError, MultiSelect, Select, Text,
};

#[derive(Serialize, Deserialize, Debug)]
struct QuizCard {
    question_type: String,
    question: String,
    choices: Vec<String>,
    answers: Vec<usize>,
    explication: String,
    source: String,
}

#[derive(Serialize, Deserialize, Debug)]
struct Json {
    question_types: Vec<String>,
    questions: HashMap<String, Vec<QuizCard>>,
}

fn get_question_category() -> Vec<String> {
    let mut file = File::open("src/questions.json").unwrap();
    let mut buff = String::new();
    file.read_to_string(&mut buff).unwrap();
    let json: Json = serde_json::from_str(&buff).expect("Json was not well formated");
    let mut questions_types = json.question_types;
    questions_types.push("Exit".to_string());
    return questions_types;
}

fn qcm_question(question_type: &str) -> InquireResult<QuizCard> {
    let question = Text::new("Question : ")
        .with_validator(required!("This field is required"))
        .with_help_message("e.g. ...")
        .with_page_size(5)
        .prompt()?;

    let mut choices: Vec<String> = Vec::new();
    let mut compteur: usize = 1;
    let mut flag: bool = true;
    while flag {
        let choice_heading = format!("Reponse {}", compteur);
        let choice = Text::new(&choice_heading)
            .with_help_message("ESC to exit")
            .prompt_skippable();
        match choice {
            Ok(None) => {
                flag = false;
            }
            Ok(ans) => {
                let text = ans.unwrap();
                if text != "" {
                    choices.push(text);
                } else {
                    flag = false;
                }
            }
            Err(_) => {
                flag = false;
            }
        }
        compteur += 1;
    }

    let raw_answers = MultiSelect::new("Valid answers :", choices.clone()).prompt()?;
    let answers = raw_answers
        .into_iter()
        .map(|x| choices.iter().position(|r| *r == x).unwrap())
        .collect();

    let explication = Text::new("Explication : ")
        .with_validator(required!("Explication requise"))
        .prompt()?;

    let source = Text::new("Source :")
        .with_help_message("Optional")
        .prompt()?;

    let quiz_card = QuizCard {
        question_type: question_type.to_string(),
        question,
        choices,
        answers,
        explication,
        source,
    };
    match prompt_confirmation("Ajouter cette fonction ?") {
        InquireResult::Ok(true) => return Ok(quiz_card),
        _ => return Err(InquireError::OperationCanceled),
    }
}

fn vf_question(question_type: &str) -> InquireResult<QuizCard> {
    let question = Text::new("Question : ")
        .with_validator(required!("This field is required"))
        .with_help_message("e.g. ...")
        .with_page_size(5)
        .prompt()?;

    let choices = vec!["Vrai".to_string(), "Faux".to_string()];

    let raw_answer = Select::new("Valid answer :", choices.clone()).prompt()?;
    let answer = choices.iter().position(|r| *r == raw_answer).unwrap();

    let explication = Text::new("Explication : ")
        .with_validator(required!("Explication requise"))
        .prompt()?;

    let source = Text::new("Source :")
        .with_help_message("Optional")
        .prompt()?;

    let quiz_card = QuizCard {
        question_type: question_type.to_string(),
        question,
        choices,
        answers: vec![answer],
        explication,
        source,
    };
    match prompt_confirmation("Ajouter cette fonction ?") {
        InquireResult::Ok(true) => return Ok(quiz_card),
        _ => return Err(InquireError::OperationCanceled),
    }
}

fn reflexion_question(question_type: &str) -> InquireResult<QuizCard> {
    let question = Text::new("Question : ")
        .with_validator(required!("This field is required"))
        .with_help_message("e.g. ...")
        .with_page_size(5)
        .prompt()?;

    let explication = Text::new("Explication : ")
        .with_validator(required!("Explication requise"))
        .prompt()?;

    let source = Text::new("Source :")
        .with_help_message("Optional")
        .prompt()?;

    let quiz_card = QuizCard {
        question_type: question_type.to_string(),
        question,
        choices: vec![],
        answers: vec![],
        explication,
        source,
    };
    match prompt_confirmation("Ajouter cette fonction ?") {
        InquireResult::Ok(true) => return Ok(quiz_card),
        _ => return Err(InquireError::OperationCanceled),
    }
}
fn save_quiz_card(quiz_card: QuizCard, question_category: &str) {
    //File::open("src/questions.json").unwrap();
    let mut file = OpenOptions::new()
        .read(true)
        .open("src/questions.json")
        .unwrap();
    let mut buff = String::new();
    file.read_to_string(&mut buff).unwrap();
    let mut json: Json = serde_json::from_str(&buff).unwrap();
    json.questions
        .get_mut(question_category)
        .expect("pas ok")
        .push(quiz_card);
    let file = OpenOptions::new()
        .write(true)
        .create(true)
        .open("src/questions.json")
        .unwrap();
    let mut writer = BufWriter::new(file);
    let _ = serde_json::to_writer_pretty(&mut writer, &json);
    let _ = writer.flush();
    println!("Question saved");
}

fn try_exit() -> bool {
    match prompt_confirmation("Quitter le programme ?") {
        InquireResult::Ok(true) => return false,
        _ => return true,
    }
}

fn get_question_types() -> Vec<&'static str> {
    return vec!["QCM", "Vrai/Faux", "Réflexion"];
}
fn main() -> InquireResult<()> {
    cprintln!("<s,cyan, W><blink>AQINRust</> (Ajout Questions Inclusion Numérique en Rust)</>");
    loop {
        println!("======= Ajout question ========");
        let question_categories = get_question_category();
        let question_category = Select::new("Catégorie :", question_categories).prompt()?;
        let question_types = get_question_types();
        if question_category == "Exit" {
            if !try_exit() {
                break;
            } else {
                continue;
            }
        }
        let question_type = Select::new("Type de question :", question_types).prompt()?;
        let quiz_card_result = if question_type == "QCM" {
            qcm_question(&question_type)
        } else if question_type == "Vrai/Faux" {
            println!("In");
            vf_question(&question_type)
        } else if question_type == "Réflexion" {
            reflexion_question(&question_type)
        } else {
            InquireResult::Err(InquireError::OperationCanceled)
        };
        match quiz_card_result {
            Ok(quiz_card) => {
                save_quiz_card(quiz_card, &question_category);
            }
            Err(_) => {}
        }
    }
    Ok(())
}
