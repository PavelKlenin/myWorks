import React from "react";
import s from "./Profile.module.css";

class ProfileStatus extends React.Component {
  state = {
    status: this.props.status,
    isEdited: true,
  };

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      this.setState({ status: this.props.status });
    }
  }

  editStatus = () => {
    this.setState({ isEdited: false });
  };

  changeStatustext = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  updateStatus = () => {
    this.setState({ isEdited: true });
    this.props.updateProfilestatus(this.state.status);
  };

  render() {
    return (
      <div className={s.profileStatus}>
        {this.state.isEdited ? (
          <div onDoubleClick={this.editStatus}>Status: {this.state.status || '-'}</div>
        ) : (
          <input
            autoFocus
            onChange={this.changeStatustext}
            onBlur={this.updateStatus}
            type="text"
            value={this.state.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
