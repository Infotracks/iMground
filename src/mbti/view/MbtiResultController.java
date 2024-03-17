package mbti.view;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.stage.Stage;
import member.dao.MemberDAO;

public class MbtiResultController implements Initializable {
	@FXML public Label lbResult;
	

	Parent root;
	MemberDAO dao;
	public void setRoot(Parent root) {
		this.root = root;
	}
	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		// TODO Auto-generated method stub
		dao = new MemberDAO();
		String result = dao.getMbtiTemporarySave();
		System.out.println(result);
		lbResult.setText("당신은 MBTI 유형은 : "+result+"입니다");
		
	}
	public void handleshare() {
		
	}
	public void handlelogin() {
		try {
			Stage stage = new Stage();
			FXMLLoader loader = new FXMLLoader(getClass().getResource("../../login/view/Login.fxml"));
			Parent root2 = loader.load();
			Scene scene = new Scene(root2);
			stage.setScene(scene);
			stage.show();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	}
	public void handlejoin() {
		try {
			Stage stage = new Stage();
			FXMLLoader loader = new FXMLLoader(getClass().getResource("../../login/join/view/join.fxml"));
			Parent root2 = loader.load();
			Scene scene = new Scene(root2);
			stage.setScene(scene);
			stage.show();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	}
}
