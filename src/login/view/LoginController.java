package login.view;

import java.io.File;
import java.io.IOException;

import java.net.*;
import java.nio.file.Paths;
import java.util.*;

import javafx.event.*;
import javafx.fxml.*;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.stage.Stage;
import login.*;
import member.dto.MemberDTO;

import java.util.ResourceBundle;

import common.CommonService;
import javafx.application.*;
import javafx.event.ActionEvent;

public class LoginController implements Initializable {
	@FXML
	private TextField tfid;
	@FXML
	private PasswordField tfpwd;
	@FXML
	private Button btnjoin, btnidsearch, btnpwdsearch;
	@FXML
	private ImageView ivkakao;
	String path;
	
	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		// TODO Auto-generated method stub
//		path = Paths.get("").toAbsolutePath().toString();
//		System.out.println(path);
//		path += "/src/image.kakao.png";
//		File file = new File(path);
//		Image kakao = new Image(file.toURI().toString());
//		ivkakao.setImage(kakao);
		btnjoin.setOnAction(event->{
            try {
            	handleBtnjoin(event);
            } catch (Exception e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        });
		btnidsearch.setOnAction(event->{
			try {
				handleidsearch(event);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
		
	}
	
	
	
	public void handleBtnjoin(ActionEvent event) throws IOException{
		System.out.println(getClass().getResource("../join/view/join.fxml"));
		Stage stage = new Stage();
		FXMLLoader loader = new FXMLLoader(getClass().getResource("../join/view/join.fxml"));
		Parent root2 = loader.load();
		Scene scene = new Scene(root2);
		stage.setScene(scene);
		stage.show();
	}
	public void handlelogin() {
		LoginService2 log = new LoginServiceImpl2();
		MemberDTO dto = log.idsearch(tfid.getText());
		MemberDTO dto2 = log.pwdsearch(tfpwd.getText());
		if(dto != null) {
			if(dto2 != null) {
				String str = "로그인 성공";
				CommonService.myAlert(str);
			}else {
				String str = "비일번호가 일치하지 않습니다";
				CommonService.myAlert(str);
			}
		}else {
			String str = "존재하지 않는 아이디입니다";
			CommonService.myAlert(str);
		}
	}
	public void handleidsearch(ActionEvent event) throws IOException{
		Stage stage = new Stage();
		FXMLLoader loader = new FXMLLoader(getClass().getResource("IdSearch.fxml"));
		Parent root2 = loader.load();
		Scene scene = new Scene(root2);
		stage.setScene(scene);
		stage.show();
	}
	public void handlepwdsearch() throws IOException{
		Stage stage = new Stage();
		FXMLLoader loader = new FXMLLoader(getClass().getResource("PwdSearch.fxml"));
		Parent root2 = loader.load();
		Scene scene = new Scene(root2);
		stage.setScene(scene);
		stage.show();
	}
	public void handleimage() throws IOException{
		String str = "미구현 입니다";
		CommonService.myAlert(str);
	}
}
