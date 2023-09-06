package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer {
    // public Rectangle rectangle;
    public Shape shape;
    
    // Renderer(Rectangle rectangle) {
    //     this.rectangle = rectangle;
    // }
    Renderer(Shape shape) {
        // this.rectangle = rectangle;
        this.shape = shape;
    }

    void draw() {
        // double area = rectangle.getArea();
        String shapename = shape.getName();
        double area = shape.getArea();

        // assume implementation

        System.out.println("Shape printed: " + shapename + "\nIts area is " + area);
    }
}
