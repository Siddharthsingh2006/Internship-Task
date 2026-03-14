package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.*;
import com.example.demo.repository.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*") // You can keep it, or remove since frontend is on same origin
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getProducts() {
        // Fetch all products from database
        return productRepository.findAll();
    }
}