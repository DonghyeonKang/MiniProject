package com.cos.security1.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

// 권한 설정을 위한 클래스
@Configuration
@EnableWebSecurity  // 스프링 시큐리티 필터(SecurityConfig)가 스프링 필터테인에 등록이 된다. 즉 우리가 만든 필터가 필터체인에 등록됨
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests()
                .antMatchers("/user/**").authenticated()    // 인증된 사용자만
                .antMatchers("/manager/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")  // admin과 manager 권한이 있는 사람만
                .antMatchers("/admin/**").access("hasRole('ROLE_ADMIN')") // admin 권한이 있는 사람마
                .anyRequest().permitAll() // 나머지는 권한을 준다.
                .and() // 그리고 로그인 페이지로 이동시킨다. -> 로그인이 되어있으면??????????????????????????
                .formLogin()
                .loginPage("/login");
    }
}
