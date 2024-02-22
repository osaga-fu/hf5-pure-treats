package com.puretreats.backend.Persistence;

import org.springframework.stereotype.Repository;

import com.puretreats.backend.Models.Product;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    
}
