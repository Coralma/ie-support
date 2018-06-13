package com.cccis.poc.action;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * Created by CCC on 2016/10/25.
 */
@Controller
@RequestMapping("/hello")
public class HelloAction {

    @RequestMapping(value = "/sayHello", method = RequestMethod.GET)
    public @ResponseBody
    String sayHello() {
        return "Hello";
    }

}