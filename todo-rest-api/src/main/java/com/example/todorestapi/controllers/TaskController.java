package com.example.todorestapi.controllers;


import com.example.todorestapi.models.Task;
import com.example.todorestapi.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v0.1/tasks")
public class TaskController {
    private final TaskService service;

    @GetMapping
    List<Task> getAllTasks(){
        return service.getAllTasks();
    }
    @PostMapping("create_task")
    Task createTask(@RequestBody Task task){
        return service.createTask(task);
    }

    @DeleteMapping("delete_task/{id}")
    void deleteTaskById(@PathVariable Integer id){
        service.deleteTaskById(id);
    }

    @PutMapping("update_task")
    Task updateTask(@RequestBody Task task){
        return service.updateTask(task);
    }

    @DeleteMapping("delete_all")
    void deleteAllTasks(){
        service.deleteAllTasks();
    }
}
