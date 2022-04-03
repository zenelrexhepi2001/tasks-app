import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  ActivityIndicator,
} from "react-native";
import { Header } from "../../components/atoms";
import { Colors, Typography } from "../../styles";
import { useSelector } from "react-redux";
import { List, AddTask } from "../../components/atoms";
import { useDispatch } from "react-redux";
import * as TasksActions from "../../actions/TasksActions";
import { TaskList } from "../../components/organisms";
import * as TodoActions from "../../actions/TasksAddActions";
import DownIcon from "../../assets/svg/down.svg";
import { DoneTasks } from "../../components/organisms";

const HomeScreen = (props) => {

  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState();

  const displayList = useSelector((state) => state.TaskData.data);
  //For display tasks reducer
  const displayTasks = useSelector((state) => state.AddTasks.dataTasks);

  const dispatch = useDispatch();

  const loadTasks = useCallback(async () => {
    setRefresh(true);
    setError(null);
    try {
      // for fetch -> List
      await dispatch(TasksActions.fetchList());
      //for fetch todo 
      await dispatch(TodoActions.fetchTodo());
    } catch (err) {
      alert(err);
      console.log(err);
    }

    setTimeout(() => {
      setRefresh(false);
    }, 200);
  }, [dispatch, setLoading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      //setTimeout value = 0
    }, 0);

    loadTasks().then(() => {
      setLoading(false);
    });
  }, [dispatch, loadTasks]);

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.LIGHT,
        }}
      >
        <Text
          style={{
            fontFamily: Typography.FONT_FAMILY_POPPIS,
            color: Colors.GRAY,
            fontSize: 17,
          }}
        >
          No tasks found
        </Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.LIGHT,
        }}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.hero}>
      <View style={styles.listContainer}>
        <FlatList
          refreshing={refresh}
          onRefresh={loadTasks}
          data={displayList}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={(post) => (
            <List
              title={post.item.title}
              border={post.item.border}
              onSelect={() =>
                props.navigation.navigate("create", {
                  //  id: post.item.id,
                })
              }
            />
          )}
          horizontal
          style={styles.col}
        />
        <AddTask onSelect={() => props.navigation.navigate("create")} />
        <View style={styles.bottom}>
          <FlatList
            refreshing={refresh}
            onRefresh={loadTasks}
            data={displayTasks}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <TaskList
                title={itemData.item.title}
                time={itemData.item.time}
                onClick={() => props.navigation.navigate("create-task")}
                onRemove={() =>
                  dispatch(TodoActions.deleteTask(itemData.item.id))
                }
              />
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnLight}
        onPress={() => setToggle(!toggle)}
      >
        <Text style={styles.btnLightText}>Done</Text>
        <DownIcon width={13} height={13} />
      </TouchableOpacity>
      {toggle && <DoneTasks />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hero: {
    backgroundColor: Colors.LIGHT,
    flex: 1,
  },

  col: {
    paddingTop: 50,
    paddingLeft: 43,
  },

  bottom: {
    paddingTop: 70,
  },

  btnLight: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
  },

  btnLightText: {
    fontSize: 20,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    color: Colors.PRIMARY,
    marginRight: 8.5,
  },
});

export default HomeScreen;
