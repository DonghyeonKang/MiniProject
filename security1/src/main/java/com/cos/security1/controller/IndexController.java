package com.cos.security1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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

    @GetMapping("user")
    public String user() {
        return "user";
    }

    @GetMapping("/admin")
    public String admin() {
        return "admin";
    }

    @GetMapping("/manager")
    public String manager() {
        return "manager";
    }
    @GetMapping("/join")
    public String join() {
        return "join";
    }

    @GetMapping("/joinProc")
    public @ResponseBody String joinProc() {
        return "joinProc";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
    // logout, login 페이지는 스프링 시큐리티에서 이미 만든게 있다. SecurityConfig 만들면 우리가 만든걸로 바뀜
}
