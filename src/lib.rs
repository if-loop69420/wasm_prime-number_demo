use wasm_bindgen::prelude::*;
use std::vec;


#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}


#[wasm_bindgen]
pub fn prime(n: i64) -> String {
    let mut sieve = vec![true; n as usize];
    sieve[0] = false;
    sieve[1] = false;

    for _i in 2..n as i64{
        if sieve[_i as usize] == true{
            for j in ((_i*_i)..n).step_by(_i as usize){
                sieve[j as usize] = false;
            }
        }
    }

    let mut result = String::new();
    for i in 2..n {
        if sieve[i as usize] == true {
            if i != 2{
                result.push_str(", ");
            }
            result.push_str(&i.to_string());
        }
    }
    result
}
