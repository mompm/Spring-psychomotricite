package com.projetpsycomoticite.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class homeController {
    
    @GetMapping("/api/hello")
    public String home() {
        return "message du backend";
    }
}
