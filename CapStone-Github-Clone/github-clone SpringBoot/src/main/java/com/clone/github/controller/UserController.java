package com.clone.github.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;



//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clone.github.model.Users;
import com.clone.github.exceptions.ResourceNotFoundException;
import com.clone.github.repository.UserRepository;
import com.clone.github.services.SeqGenerator;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("/api/")
public class UserController {
    @Autowired
    private UserRepository repo;

    @Autowired
    private SeqGenerator seqGen;

    @GetMapping("/users")
    public List < Users > getUsers() {
        return repo.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity < Users > getUserById(@PathVariable(value = "id") Long userId)
    throws ResourceNotFoundException {
        Users user = repo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not Found for"+userId));
        return ResponseEntity.ok().body(user);
    }

    
    
    @PostMapping("/users")
    public Users createUser(@RequestBody Users user) {
        user.setId(seqGen.genSeq(Users.SEQUENCE_NAME));
        return repo.save(user);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity < Users > updateUser(@PathVariable(value = "id") Long userId,
        @RequestBody Users userDetails) throws ResourceNotFoundException {
        Users user = repo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not Found for"+userId));

        user.setEmailId(userDetails.getEmailId());
        user.setPassword(userDetails.getPassword());
        user.setUsername(userDetails.getUsername());
        user.setData(userDetails.getData());
        user.setImage(userDetails.getImage());
        user.setName(userDetails.getName());
        final Users updatedUser = repo.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/users/{id}")
    public Map < String, Boolean > deleteUser(@PathVariable(value = "id") Long userId)
    throws ResourceNotFoundException {
        Users user = repo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not Found for"+userId));
        repo.delete(user);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    //Login
    @CrossOrigin(origins="http://localhost:4200/")
	@PostMapping(path="/signin")
	public Users loginUser(@RequestBody Users user) throws Exception {
		String tempEmail=user.getEmailId();
		String tempPassword=user.getPassword();
		Users userobj=null;
		if(tempEmail!=null && tempPassword!=null) {
			 userobj=repo.findByEmailIdAndPassword(tempEmail, tempPassword);
		}
		if(userobj==null) {
			throw new Exception("Bad Credentials");
		}
		return userobj;
	}
}