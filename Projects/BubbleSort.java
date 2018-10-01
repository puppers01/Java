import javax.swing.*;

float values = [];
int i = 0;
int j = 0;

public class Main {
	public static void main(String[] args) {

		// Create a Canvas
		JFrame frame = new JFrame("Swing");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		// set x, y, width and height properties
		frame.setBounds(50, 50, 200, 200);

		// Display the Frame
		frame.setVisible(true);

  		// Initialize values array of float points
  		// with the width of the screen
  		values = new float[width];

  		// itterate through values array to
  		// give a random height value
  		for (int i = 0; i < values.length; i++) {
    			values[i] = random(height);
  		}
	}
  	
	// run functions


	void draw() {
  

  		if (i < values.length) {
    			for (int j = 0; j < values.length - i - 1; j++) {
      				float a = values[j];
      				float b = values[j+1];
      				if (a > b) {
        				swap(values, j, j+1);
      				}
    			}
  		} else {
    			System.out.println("finished");
  	}

  	i++;

  	public static void drawLine() {
		for (int i = 0; i < values.length; i++) {
    		// Draw a Line

		}
	}


	public static void swap(float[] arr, int a, int b) {
  		float temp = arr[a];
  		arr[a] = arr[b];
  		arr[b] = temp;
	}
}
