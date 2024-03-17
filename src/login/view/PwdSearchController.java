package login.view;

import java.net.URL;
import java.util.ArrayList;
import java.util.ResourceBundle;

import common.CommonService;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import login.LoginService2;
import login.LoginServiceImpl2;
import member.dto.MemberDTO;

public class PwdSearchController implements Initializable {
	@FXML private TextField tfid;
	@FXML private Label lbpwd;
	
	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		// TODO Auto-generated method stub

	}
	public void handlepwdsearch(){
		String id = tfid.getText();
		LoginService2 log = new LoginServiceImpl2();
		ArrayList<MemberDTO> mem = log.search2(id);
		if(mem.size() == 0) {
			String str = "등록된 아이디가 없습니다";
			CommonService.myAlert(str);
		}else {
			for(int i = 0; i<mem.size(); i++) {
				MemberDTO dto = mem.get(i);
				String pwd = dto.getUserPwd();
				String name = dto.getUserName();
				lbpwd.setText(name + "님의" + " 비밀번호는 : " + pwd + "입니다.");
			}
		}
	}
}
