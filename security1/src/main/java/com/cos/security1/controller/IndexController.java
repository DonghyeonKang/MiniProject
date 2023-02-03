package com.cos.security1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller // view 리턴
public class IndexController {

    // localhost:8080
    // localhost:8080/
    @GetMapping({"", "/"})
    public String index() {
        // 머스태치 기본 폴더 src/main/resources/
        // view resolver 설정 prefix:templates,  suffix: .mustache
        return "index";
    }
}
