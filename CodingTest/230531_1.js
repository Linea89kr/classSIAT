function solution(my_string, overwrite_string, s) {
    let Str1 = [...my_string]
    Str1.splice(s, overwrite_string.length, overwrite_string)
    return str1.join()
}