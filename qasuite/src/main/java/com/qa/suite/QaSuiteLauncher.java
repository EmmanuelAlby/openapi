package com.qa.suite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
public class QaSuiteLauncher {

    public static void main(String args[]){
        SpringApplication.run(QaSuiteLauncher.class,args);
    }
}
