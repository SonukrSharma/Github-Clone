package com.clone.github.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class Users {

    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    private long id;

    @Indexed(unique = true)
    private String username;
    
    private String password;

    @Indexed(unique = true)
    private String emailId;
    
    
    private String image;
    
	private String name;
	
	private List<RepoData> data;
    
    public List<RepoData> getData() {
		return data;
	}
	public void setData(List<RepoData> data) {
		this.data = data;
	}
	public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

    @Override
    public String toString() {
        return "Users [id=" + id + ", Username=" + username + ", Password=" + password + ", emailId=" + emailId + ", name=" + name +
        		 ", image=" + image + "]";
    }
}