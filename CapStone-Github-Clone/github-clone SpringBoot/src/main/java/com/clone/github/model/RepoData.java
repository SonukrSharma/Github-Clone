package com.clone.github.model;

import java.util.List;

public class RepoData {

	private String RepoName;
	private List<RepoFiles> file;
	private List<Directories> directories;
	
	
	public List<RepoFiles> getFile() {
		return file;
	}

	public void setFile(List<RepoFiles> file) {
		this.file = file;
	}

	public List<Directories> getDirectories() {
		return directories;
	}

	public void setDirectories(List<Directories> directories) {
		this.directories = directories;
	}

	public String getRepoName() {
		return RepoName;
	}

	public void setRepoName(String RepoName) {
		this.RepoName = RepoName;
	} 
	
	@Override
    public String toString() {
        return " RepoName=" + RepoName + ", No of Files=" + file.size()+ ", No of Directories=" + directories.size()+" " ;
    }
}
