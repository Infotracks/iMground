package member.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import member.dto.MemberDTO;

public class MemberDAO {
	private Connection con;
	private PreparedStatement ps;
	private ResultSet rs;

	public MemberDAO() {
		String driver = "oracle.jdbc.driver.OracleDriver";
		String url = "jdbc:oracle:thin:@localhost:1521:orcl";
		String id = "c##ura", pwd = "a5690";
		try {
			Class.forName(driver);
			System.out.println("드라이브 로드성공");
			con = DriverManager.getConnection(url,id,pwd);
			System.out.println("디비 연결 성공");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	public int register(MemberDTO dto) {
		int result = 0;
		String sql = "insert into member(user_uid,user_name,user_id,user_pwd,user_newsagency,user_tel,user_email,user_mbti)"+"values(?,?,?,?,?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, dto.getUserUid());
			ps.setString(2, dto.getUserName());
			ps.setString(3, dto.getUserId());
			ps.setString(4, dto.getUserPwd());
			ps.setString(5, dto.getUserNewsAgency());
			ps.setString(6, dto.getUserTel());
			ps.setString(7, dto.getUserEmail());
			ps.setString(8, dto.getUserMbti());
			result = ps.executeUpdate();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}
	public MemberDTO idsearch(String id ) {
		String sql = "select * from member where user_id = ?";
		MemberDTO dto = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, id);
			rs = ps.executeQuery();
			if(rs.next()) {
				dto = new MemberDTO();
				dto.setUserId(rs.getString("user_id"));
					
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dto;
	}
	public MemberDTO emailsearch(String email ) {
		String sql = "select * from member where user_email ="+"'"+email+"'";
		MemberDTO dto = null;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				dto = new MemberDTO();
				dto.setUserId(rs.getString("user_email"));
				
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dto;
	}
	public ArrayList<MemberDTO> search(String email ) {
		String sql = "select * from member where user_email ="+"'"+email+"'";
		ArrayList<MemberDTO> mem = new ArrayList<>();
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				MemberDTO dto = new MemberDTO();
				dto.setUserId(rs.getString("user_id"));
				dto.setUserName(rs.getString("user_name"));
				dto.setUserPwd(rs.getString("user_pwd"));
				mem.add(dto);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return mem;
	}
	public ArrayList<MemberDTO> search2(String id ) {
		String sql = "select * from member where user_id ="+"'"+id+"'";
		ArrayList<MemberDTO> mem = new ArrayList<>();
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				MemberDTO dto = new MemberDTO();
				dto.setUserName(rs.getString("user_name"));
				dto.setUserPwd(rs.getString("user_pwd"));
				dto.setUserEmail(rs.getString("user_email"));
				mem.add(dto);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return mem;
	}
	public MemberDTO pwdsearch(String pwd ) {
		String sql = "select * from member where user_pwd ="+"'"+pwd+"'";
		MemberDTO dto = null;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				dto = new MemberDTO();
				dto.setUserId(rs.getString("user_pwd"));
				
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dto;
	}
	public int pwdchange(MemberDTO dto ) {
		String sql = "update member set user_pwd=? where user_id=?";
		int result = 0;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getUserPwd());
			ps.setString(2, dto.getUserId());
			result = ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	public int setMbtiTemporarySave(String mbti, int uid) {
		int result = 0;
		String sql = "insert into non_member(user_uid, user_mbti)"+"values(?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, uid);
			ps.setString(2, mbti);
			result = ps.executeUpdate();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}
	public String getMbtiTemporarySave() {
		String sql = "SELECT user_mbti FROM non_member WHERE user_uid = (SELECT MAX(user_uid) FROM non_member)";
		MemberDTO dto = null;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				dto = new MemberDTO();
				dto.setUserMbti(rs.getString("user_mbti"));	
			}
							
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dto.getUserMbti();
	}
	public int getMbtiUid() {
		String sql = "SELECT MAX(user_uid) AS lastUid FROM member member";
		int nextuid = 0;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				int lastuid = rs.getInt("lastuid");
				nextuid = lastuid + 1;
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return nextuid;
	}
	public int getnonmemberUid() {
		String sql = "SELECT MAX(user_uid) AS lastUid FROM non_member non_member";
		int nextuid = 0;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				int lastuid = rs.getInt("lastuid");
				nextuid = lastuid + 1;
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return nextuid;
	}
}
