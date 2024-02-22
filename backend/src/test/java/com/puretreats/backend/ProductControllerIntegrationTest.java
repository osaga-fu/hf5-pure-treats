package com.puretreats.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;

import com.puretreats.backend.Models.Product;
import com.puretreats.backend.Persistence.ProductRepository;

import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerIntegrationTest {

    @Autowired
    private MockMvc api;

    @MockBean
    private ProductRepository productRepository;

    @Test
    public void testShowProducts() throws Exception {

        List<Product> listProducts = new ArrayList<>();
        listProducts.add(new Product(1, "Product 1", 10.0, "Ingredients 1", "Nutritional Info 1", true, false, false,
                "photo1.jpg"));
        listProducts.add(new Product(2, "Product 2", 20.0, "Ingredients 2", "Nutritional Info 2", false, true, true,
                "photo2.jpg"));

        when(productRepository.findAll()).thenReturn(listProducts);

        api.perform(get("/products"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].ingredients").value("Ingredients 1"))
                .andExpect(jsonPath("$[0].name").value("Product 1"))
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].price").value(10.0))
                .andExpect(jsonPath("$[0].nutritionalInformation").value("Nutritional Info 1"))
                .andExpect(jsonPath("$[0].photoUrl").value("photo1.jpg"))
                .andExpect(jsonPath("$[0].sugarFree").value(false))
                .andExpect(jsonPath("$[0].lactoseFree").value(false))
                .andExpect(jsonPath("$[0].glutenFree").value(true))
                .andExpect(jsonPath("$[0].name").value("Product 1"))
                .andExpect(jsonPath("$[1].ingredients").value("Ingredients 2"))
                .andExpect(jsonPath("$[1].name").value("Product 2"))
                .andExpect(jsonPath("$[1].id").value(2))
                .andExpect(jsonPath("$[1].price").value(20.0))
                .andExpect(jsonPath("$[1].nutritionalInformation").value("Nutritional Info 2"))
                .andExpect(jsonPath("$[1].photoUrl").value("photo2.jpg"))
                .andExpect(jsonPath("$[1].sugarFree").value(true))
                .andExpect(jsonPath("$[1].lactoseFree").value(true))
                .andExpect(jsonPath("$[1].glutenFree").value(false));

    }

    @Test
    public void testShowProductById() throws Exception {

        Product product = new Product(2, "Product 2", 20.0, "Ingredients 2", "Nutritional Info 2", true, true, false, "photo2.jpg");
        Optional<Product> optionalProducts = Optional.of(product);

        when(productRepository.findById(2)).thenReturn(optionalProducts);

        api.perform(get("/products/2")
               .accept(MediaType.APPLICATION_JSON))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.id").value(2))
               .andExpect(jsonPath("$.name").value("Product 2"))
               .andExpect(jsonPath("$.price").value(20.0))
               .andExpect(jsonPath("$.nutritionalInformation").value("Nutritional Info 2"))
               .andExpect(jsonPath("$.glutenFree").value(true))
               .andExpect(jsonPath("$.lactoseFree").value(true))
               .andExpect(jsonPath("$.sugarFree").value(false))
               .andExpect(jsonPath("$.ingredients").value("Ingredients 2"))
               .andExpect(jsonPath("$.photoUrl").value("photo2.jpg"));
          
    }

    
}
