package com.clone.github.model;

import java.util.List;

public class Directories {
	private String FolderName;
	private List<RepoFiles> file;
	public List<RepoFiles> getFile() {
		return file;
	}
	public void setFile(List<RepoFiles> file) {
		this.file = file;
	}
	private List<Directories> directories;

	public String getFolderName() {
		return FolderName;
	}
	public void setFolderName(String folderName) {
		FolderName = folderName;
	}
	
	public List<Directories> getDirectories() {
		return directories;
	}
	public void setDirectories(List<Directories> directories) {
		this.directories = directories;
	}
}
