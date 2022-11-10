package com.clone.github.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.clone.github.model.Users;

@Repository
public interface UserRepository extends MongoRepository<Users,Long>{

	public Users findByEmailIdAndPassword(String emailId,String password);
}

