package edu.cmu.cs.cs214.lab02;

// import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.*;

public class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(2, 3);
        Shape circle = new Circle(3);
        Shape square = new Square(6);

        Renderer renderer = new Renderer(square);   // No longer needs to provide Rectangle to Render?

        renderer.draw();
    }
}
