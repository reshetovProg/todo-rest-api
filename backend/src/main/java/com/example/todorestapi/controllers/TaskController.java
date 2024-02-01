package com.example.todorestapi.controllers;


import com.example.todorestapi.models.Task;
import com.example.todorestapi.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v0.1")
@CrossOrigin("http://localhost:3000/")
public class TaskController {
    private final TaskService service;

    @GetMapping("/tasks")
    List<Task> getAllTasks(){
        return service.getAllTasks();
    }
    @PostMapping("/task")
    Task createTask(@RequestBody Task task){
        return service.createTask(task);
    }

    @DeleteMapping("/task/{id}")
    void deleteTaskById(@PathVariable Integer id){
        service.deleteTaskById(id);
    }

    @PutMapping("/task")
    Task updateTask(@RequestBody Task task){
        return service.updateTask(task);
    }

    @DeleteMapping("/tasks")
    void deleteAllTasks(){
        service.deleteAllTasks();
    }
}
