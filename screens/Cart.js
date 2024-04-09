import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Cart() {
  return (
    <View>
      <View>
        <Pressable>
          <Text>Current Orders</Text>
        </Pressable>
        <Pressable>
          <Text>Previous Orders</Text>
        </Pressable>
        <Pressable>
          <Text>Coupons</Text>
        </Pressable>
        <Pressable>
          <Text>Quotations</Text>
        </Pressable>
      </View>
      <View>
        <Text>My Cart</Text>
        <Pressable>
          <Image />
          <Text>Sign Out</Text>
          <Image />
        </Pressable>
        <Pressable>
          <Image />
          <Text>Sign Out</Text>
          <Image />
        </Pressable>
        <Pressable>
          <Image />
          <Text>Sign Out</Text>
          <Image />
        </Pressable>
      </View>
      <Text>Order / Summary</Text>
      <View>
        <Text>3 Services in a cart</Text>
        <Text>Charges 1</Text> 
        <Text>$104</Text>
        <Text>Charges 2</Text> 
        <Text>$34</Text>
        <Text>Charges 3</Text> 
        <Text>$32</Text>
        <View />
        <Text>Total</Text> 
        <Text>$232</Text>
        <Pressable>
          <Text>Book Now</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
