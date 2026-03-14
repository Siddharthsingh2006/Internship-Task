package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMVCConfig  implements WebMvcConfigurer{

	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// TODO Auto-generated method stub
		WebMvcConfigurer.super.addCorsMappings(registry);
		
		
		registry.addMapping("/**")
	       .allowedOrigins("http://localhost:5173", "http://localhost:5174", "http://localhost:5175")
	       .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
	       .allowedHeaders("*");
	}
}
