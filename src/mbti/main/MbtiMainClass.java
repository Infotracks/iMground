package mbti.main;

import java.io.File;
import java.net.URL;
import java.nio.file.Paths;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;


public class MbtiMainClass extends Application{

	@Override
	public void start(Stage primaryStage) throws Exception{
		
		FXMLLoader loader = new FXMLLoader(getClass().getResource("../view/MbtiQuestion.fxml"));
		
		Parent root = loader.load(); 
		Scene scene = new Scene(root); 
		
		primaryStage.setTitle("MBTI"); 
		primaryStage.setScene(scene); 
		primaryStage.show(); 
		
	}
	public static void main(String[] args) {
		launch(args);
	}
}
