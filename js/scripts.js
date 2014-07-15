var loadTasks = function(list) {
  $("tbody").empty();
  list.tasks.forEach(function(task) {
    $("tbody").append("<div class='task-row'><tr><td>"+task.task+"</td><td><input type='checkbox' id='task-status'></td></tr></div>");
  });
};
$(document).ready(function() {
  var currentMaster = {};
  $("#category-add").click(function(event) {
    var newCategory = $("input#new-category").val();
    var master = {category: newCategory, tasks: []};
    currentMaster = master;
    $("#selected-category").text(newCategory);
    loadTasks(currentMaster);
    $("#list-of-categories").append("<li>" +newCategory +"</li>");
    $("li").last().click(function(event) {
      $("#selected-category").text(newCategory);
      currentMaster = master;
      loadTasks(currentMaster);
    });
    $("input#new-category").val("");
  });
  $("form").submit(function(event) {
    event.preventDefault();
    var newTask = $("input#new-task").val();
    var taskItem = {task: newTask, completed: false};
    currentMaster.tasks.push(taskItem);
    $("tbody").append("<div class='task-row'><tr><td>"+taskItem.task+"</td><td><input type='checkbox' id='task-status'></td></tr></div>");
    $("input#new-task").val("");
    $("input#task-status").last().click(function() {
      taskItem.completed = true;
    });
  });
});
