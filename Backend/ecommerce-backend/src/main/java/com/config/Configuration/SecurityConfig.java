//package com.config.Configuration;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.cors.*;
//import org.springframework.web.filter.CorsFilter;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    // Security configuration
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http
//            .csrf(csrf -> csrf.disable())                  // Disable CSRF for APIs
//            .authorizeHttpRequests(auth -> auth
//                .anyRequest().permitAll()                  // Allow all requests
//            );
//
//        return http.build();
//    }
//
//    // Global CORS filter for allowing frontend access
//    @Bean
//    public CorsFilter corsFilter() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//
//        // Allow your React app
//        config.addAllowedOrigin("http://localhost:5176"); 
//        config.addAllowedHeader("*");    // Allow all headers
//        config.addAllowedMethod("*");    // Allow GET, POST, PUT, DELETE, etc.
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);  // Apply to all routes
//
//        return new CorsFilter(source);
//    }
//}