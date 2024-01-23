package com.example.todorestapi.services.impl;

import com.example.todorestapi.models.Task;
import com.example.todorestapi.repositories.TaskRepository;
import com.example.todorestapi.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository repository;
    @Override
    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    @Override
    public Task createTask(Task task) {
        return repository.save(task);
    }

    @Override
    public void deleteTaskById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Task updateTask(Task task) {
        return repository.save(task);
    }

    @Override
    public void deleteAllTasks() {
        repository.deleteAll();
    }
}
