package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // Place Order
    @PostMapping
    public Order placeOrder(@RequestBody Order order) {

        // set default order status
        order.setStatus("Placed");

        return orderRepository.save(order);
    }

    // Get All Orders
    @GetMapping
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }
}