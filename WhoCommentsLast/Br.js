(function executeRule(current, previous /*null when async*/) {

	
    var ladComm = gs.getUserName();
      current.u_user_last_comment = ladComm;
  
      var timeLadcomm = gs.nowDateTime();
      current.u_time_last_comment = timeLadcomm;
      
      
      current.update();
  
  })(current, previous);