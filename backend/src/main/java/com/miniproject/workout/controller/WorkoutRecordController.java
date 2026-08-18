package com.miniproject.workout.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.workout.domain.WorkoutRecord;
import com.miniproject.workout.service.WorkoutRecordService;

@RestController
public class WorkoutRecordController {

	private final WorkoutRecordService workoutRecordService;

	public WorkoutRecordController(WorkoutRecordService workoutRecordService) {
		this.workoutRecordService = workoutRecordService;
	}

	@PostMapping("/api/workouts")
	@ResponseStatus(HttpStatus.CREATED)
	public WorkoutRecord register(@RequestBody WorkoutRecordRequest request) {
		return workoutRecordService.register(
				request.exerciseName(),
				request.weight(),
				request.reps(),
				request.sets());
	}

	public record WorkoutRecordRequest(String exerciseName, Double weight, Integer reps, Integer sets) {
	}
}
