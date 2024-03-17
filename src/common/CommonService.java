package common;

import javafx.scene.Parent;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.stage.Stage;

public interface CommonService {
	public static void myAlert(String msg) {
		Alert alert = new Alert(AlertType.INFORMATION);
		alert.setContentText(msg);
		alert.show();
	}
	public static void cancelFunc(Parent root) {
		// TODO Auto-generated method stub
		Stage stage = (Stage)root.getScene().getWindow();
		stage.close();
	}
}
