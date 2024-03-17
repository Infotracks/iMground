package login;

import java.io.IOException;
import java.util.ArrayList;



import javafx.event.ActionEvent;
import javafx.fxml.*;
import javafx.scene.*;
import javafx.scene.control.TextField;
import member.dao.MemberDAO;
import member.dto.MemberDTO;

public class LoginServiceImpl2 implements LoginService2 {
	MemberDAO dao;
	public LoginServiceImpl2() {
		dao = new MemberDAO();
	}
	@Override
	public int register(String name, String id, String pwd,
			String newsagency,String tel,String email,String mbti) {
		// TODO Auto-generated method stub
		MemberDTO dto = new MemberDTO();
		int result = 0;
		int uid = dao.getMbtiUid();
		dto.setUserUid(uid);
		dto.setUserName(name);
		dto.setUserId(id);
		dto.setUserPwd(pwd);
		dto.setUserNewsAgency(newsagency);
		dto.setUserTel(tel);
		dto.setUserEmail(email);
		dto.setUserMbti(mbti);
		MemberDTO idsh = idsearch(id);
		MemberDTO emailsh = emailsearch(id);
		if(idsh == null) {
			if(emailsh == null) {
				result = dao.register(dto);
			}
		}
		return result;
	}
	
	
//	@Override
//	public int Pwdchange(String pwd, String id) {
//		int result = dao.Pwdchange(pwd, id);
//		return result;
//	}

	public MemberDTO idsearch(String id) {
		// TODO Auto-generated method stub
		MemberDTO se = dao.idsearch(id);
		return se;
	}
	
	public MemberDTO emailsearch(String email) {
		// TODO Auto-generated method stub
		MemberDTO se = dao.emailsearch(email);
		return se;
	}
	
	public MemberDTO pwdsearch(String pwd) {
		// TODO Auto-generated method stub
		MemberDTO se = dao.pwdsearch(pwd);
		return se;
	}
	public ArrayList<MemberDTO> search(String email) {
		ArrayList<MemberDTO> mem = dao.search(email);
		return mem;
	}
	public int pwdchange(MemberDTO dto ) {
		int result = dao.pwdchange(dto);
		
		return result;
	}
	public ArrayList<MemberDTO> search2(String id ){
		ArrayList<MemberDTO> mem = dao.search2(id);
		return mem;
	}
}
