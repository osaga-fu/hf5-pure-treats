package com.puretreats.backend.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.puretreats.backend.Models.Product;
import com.puretreats.backend.Persistence.ProductRepository;
import org.springframework.web.bind.annotation.GetMapping;


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

}
