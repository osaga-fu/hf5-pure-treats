package com.puretreats.backend.Controllers;

public class ProductResponse {
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

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public String getIngredients() {
        return ingredients;
    }

    public String getNutritionalInformation() {
        return nutritionalInformation;
    }

    public boolean isGlutenFree() {
        return glutenFree;
    }

    public boolean isLactoseFree() {
        return lactoseFree;
    }

    public boolean isSuguarFree() {
        return suguarFree;
    }

    public ProductResponse(Integer id, String name, Double price, String ingredients, String nutritionalInformation,
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
