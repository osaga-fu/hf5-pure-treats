package com.puretreats.backend.Controllers;

public class ProductResponse {
    private Integer id;
    private String name;
    private Double price;
    private String ingredients;
    private String nutritionalInformation;
    private boolean glutenFree;
    private boolean lactoseFree;
    private boolean sugarFree;
    private String photoUrl;

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

    public boolean isSugarFree() {
        return sugarFree;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public ProductResponse(Integer id, String name, Double price, String ingredients, String nutritionalInformation,
            boolean glutenFree, boolean lactoseFree, boolean sugarFree, String photoUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.nutritionalInformation = nutritionalInformation;
        this.glutenFree = glutenFree;
        this.lactoseFree = lactoseFree;
        this.sugarFree = sugarFree;
        this.photoUrl = photoUrl;
    }

}
