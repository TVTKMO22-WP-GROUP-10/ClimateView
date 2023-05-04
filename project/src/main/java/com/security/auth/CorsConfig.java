package com.security.auth;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//settings for /private - request
@Configuration
public class CorsConfig implements WebMvcConfigurer{

        @Override
        public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/private")
                .allowedOrigins("http://localhost:3000")
                .allowedHeaders("Authorization", "content-type")
                .allowedMethods("GET")
                .allowCredentials(true);
                
        }
    
    }
    

