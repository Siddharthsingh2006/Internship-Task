//package com.controller.Controller;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.cors.*;
//import org.springframework.web.filter.CorsFilter;
//
//@Configuration
//public class WebConfig {
//
//    @Bean
//    public CorsFilter corsFilter() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//
//        // Allow React frontend
//        config.addAllowedOrigin("http://localhost:5176");
//        config.addAllowedOrigin("http://localhost:5175");
//        config.addAllowedOrigin("http://localhost:5174");// React port
//        config.addAllowedHeader("/*");
//        config.addAllowedMethod("*"); // GET, POST, PUT, DELETE etc.
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config); // Apply to all routes
//
//        return new CorsFilter(source);
//    }
//}