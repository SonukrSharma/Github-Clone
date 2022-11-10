package com.clone.github.services;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.clone.github.model.DBSequence;

@Service
public class SeqGenerator {

	private MongoOperations mongoOperations;
	
	@Autowired
    public SeqGenerator(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }
	
	public long genSeq(String seqName) {
		DBSequence counter = mongoOperations.findAndModify(query(where("_id").is(seqName)),
                new Update().inc("seq",1), options().returnNew(true).upsert(true),
                DBSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;
		
	}
}
