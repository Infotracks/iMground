package login.view;

import java.net.URL;
import java.util.ArrayList;
import java.util.ResourceBundle;

import common.CommonService;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.*;
import login.LoginService2;
import login.LoginServiceImpl2;
import member.dto.MemberDTO;

public class IdSearchController implements Initializable {
	@FXML TextField tfemail;
	@FXML Label lbid;
	
	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		// TODO Auto-generated method stub

	}
	public void handlesearch() {
		String email = tfemail.getText();
		LoginService2 log = new LoginServiceImpl2();
		ArrayList<MemberDTO> mem = log.search(email);
		if(mem.size() == 0) {
			String str = "등록된 이메일이 없습니다";
			CommonService.myAlert(str);
		}else {
			for(int i = 0; i<mem.size(); i++) {
				MemberDTO dto = mem.get(i);
				String id = dto.getUserId();
				System.out.println(id);
				String name = dto.getUserName();
				System.out.println(name);
				lbid.setText(name + "님의" + " 아이디는 : " + id + "입니다.");
			}
		}
		
	}
}
