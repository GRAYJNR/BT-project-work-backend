export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          appointments_id: number
          contacts: string
          end_date: string
          name: string | null
          start_date: string
          time: string
        }
        Insert: {
          appointments_id?: number
          contacts: string
          end_date: string
          name?: string | null
          start_date: string
          time: string
        }
        Update: {
          appointments_id?: number
          contacts?: string
          end_date?: string
          name?: string | null
          start_date?: string
          time?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          category_id: number
          name: string
        }
        Insert: {
          category_id?: number
          name: string
        }
        Update: {
          category_id?: number
          name?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          contact_id: number
          contact_number: string
          email: string | null
          full_name: string
        }
        Insert: {
          contact_id?: number
          contact_number: string
          email?: string | null
          full_name: string
        }
        Update: {
          contact_id?: number
          contact_number?: string
          email?: string | null
          full_name?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          customer_id: number
          email: string
          name: string
          password: string
          phone_number: string | null
        }
        Insert: {
          customer_id?: number
          email: string
          name: string
          password: string
          phone_number?: string | null
        }
        Update: {
          customer_id?: number
          email?: string
          name?: string
          password?: string
          phone_number?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          order_id: number
          order_items_id: number
          product_id: number
          quantity: number
          total_price: number
          unit_price: number
        }
        Insert: {
          order_id: number
          order_items_id?: number
          product_id: number
          quantity: number
          total_price: number
          unit_price: number
        }
        Update: {
          order_id?: number
          order_items_id?: number
          product_id?: number
          quantity?: number
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          }
        ]
      }
      orders: {
        Row: {
          created_at: string
          customer_id: number
          order_date: string
          order_id: number
          payment_method_id: number
          total_amount: number
        }
        Insert: {
          created_at?: string
          customer_id: number
          order_date: string
          order_id?: number
          payment_method_id: number
          total_amount: number
        }
        Update: {
          created_at?: string
          customer_id?: number
          order_date?: string
          order_id?: number
          payment_method_id?: number
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "orders_payment_method_id_fkey"
            columns: ["payment_method_id"]
            isOneToOne: false
            referencedRelation: "payment_method"
            referencedColumns: ["id"]
          }
        ]
      }
      payment_method: {
        Row: {
          description: string | null
          id: number
          type: string
        }
        Insert: {
          description?: string | null
          id?: number
          type: string
        }
        Update: {
          description?: string | null
          id?: number
          type?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          category_id: number
          description: string | null
          name: string
          price: number
          product_id: number
          stock_quantity: number
        }
        Insert: {
          category_id: number
          description?: string | null
          name: string
          price: number
          product_id: number
          stock_quantity: number
        }
        Update: {
          category_id?: number
          description?: string | null
          name?: string
          price?: number
          product_id?: number
          stock_quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["category_id"]
          }
        ]
      }
      transactions: {
        Row: {
          amount: number
          order_id: number
          payment_method: string
          transaction_date: string
          transcation_id: number
        }
        Insert: {
          amount: number
          order_id: number
          payment_method: string
          transaction_date: string
          transcation_id?: number
        }
        Update: {
          amount?: number
          order_id?: number
          payment_method?: string
          transaction_date?: string
          transcation_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
