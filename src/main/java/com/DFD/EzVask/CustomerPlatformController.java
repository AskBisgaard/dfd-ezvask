package com.DFD.EzVask;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerPlatformController {
    private static final String template = "Hello, %s!";

    @GetMapping("/")
    public String index() {
        return new String("Schedule Pickup");
    }
    @GetMapping("/pickup")
    public Pickup pickup(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Pickup(String.format(template, name));
    }
}
