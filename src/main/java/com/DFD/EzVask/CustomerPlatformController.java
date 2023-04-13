package com.DFD.EzVask;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin
public class CustomerPlatformController {
    static ConcurrentHashMap<Long, Pickup> scheduledPickups = new ConcurrentHashMap<Long, Pickup>();
    static long maxId = 0;

    @GetMapping("/")
    public Collection<Pickup> index() {
        return scheduledPickups.values();
    }
    @PostMapping("/pickup")
    public Collection<Pickup> pickup(@RequestBody String body) throws JsonMappingException, JsonProcessingException {
        body = body.replace("\"id\":-1", "\"id\":" + ++maxId); //todo: find a less crude way to doing this.

        Pickup pickup = new ObjectMapper().readValue(body, Pickup.class);
        
        scheduledPickups.put(pickup.id(), pickup);

        return scheduledPickups.values();
    }
    @DeleteMapping(path= "/cancel/{id}")
    public Collection<Pickup> cancel(@PathVariable("id") long id) {
        scheduledPickups.remove(id);

        return scheduledPickups.values();
    }
}
