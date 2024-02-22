package com.puretreats.backend.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.puretreats.backend.Models.Product;
import com.puretreats.backend.Persistence.ProductRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<ProductResponse> showProducts() {

        List<ProductResponse> products = new ArrayList<ProductResponse>();
        List<Product> productsInDatabase = productRepository.findAll();
        for (Product product : productsInDatabase) {
            products.add(new ProductResponse(product.getId(), product.getName(), product.getPrice(),
                    product.getIngredients(), product.getnutritionalInformation(), product.isGlutenFree(),
                    product.isLactoseFree(), product.isSugarFree(), product.getPhotoUrl()));
        }
        return products;
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable Integer id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            ProductResponse productResponse = new ProductResponse(existingProduct.getId(), existingProduct.getName(),
                    existingProduct.getPrice(), existingProduct.getIngredients(),
                    existingProduct.getnutritionalInformation(), existingProduct.isGlutenFree(),
                    existingProduct.isLactoseFree(), existingProduct.isSugarFree(), existingProduct.getPhotoUrl());
            return ResponseEntity.ok(productResponse);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/products/search")
    public List<Product> searchProducts(@RequestParam("query") String query) {
        return productRepository
                .findAllByNameContainingIgnoreCaseOrIngredientsContainingIgnoreCase(
                        query, query);
    }

}
