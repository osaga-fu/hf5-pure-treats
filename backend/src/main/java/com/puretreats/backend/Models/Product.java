package com.puretreats.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products") 
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Double price;
    private String ingredients;
    private String nutritionalInformation;
    private boolean glutenFree;
    private boolean lactoseFree;
    private boolean suguarFree;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public String getIngredients() {
        return ingredients;
    }
    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }
    public String getnutritionalInformation() {
        return nutritionalInformation;
    }
    public void setnutritionalInformation(String nutritionalInformation) {
        this.nutritionalInformation = nutritionalInformation;
    }
    public boolean isGlutenFree() {
        return glutenFree;
    }
    public void setGlutenFree(boolean glutenFree) {
        this.glutenFree = glutenFree;
    }
    public boolean isLactoseFree() {
        return lactoseFree;
    }
    public void setLactoseFree(boolean lactoseFree) {
        this.lactoseFree = lactoseFree;
    }
    public boolean isSuguarFree() {
        return suguarFree;
    }
    public void setSuguarFree(boolean suguarFree) {
        this.suguarFree = suguarFree;
    }
    public Product() {
    }

    public Product(Integer id, String name, Double price, String ingredients, String nutritionalInformation,
            boolean glutenFree, boolean lactoseFree, boolean suguarFree) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.nutritionalInformation = nutritionalInformation;
        this.glutenFree = glutenFree;
        this.lactoseFree = lactoseFree;
        this.suguarFree = suguarFree;
    }
    
}
