package com.DFD.EzVask;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CustomerPlatformController {
    @GetMapping("/")
    public String index() {
        return "Schedule Pickup";
    }
    @PostMapping(path = "/pickup", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String pickup(@RequestBody String body) {
        System.out.println(body);
        return body;
    }
}
